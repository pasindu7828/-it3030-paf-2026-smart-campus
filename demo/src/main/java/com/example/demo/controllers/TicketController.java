package com.example.demo.controllers;

import com.example.demo.dto.TicketDTO;
import com.example.demo.dto.TicketUpdateDTO;
import com.example.demo.model.Ticket;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tickets")
@RequiredArgsConstructor
public class TicketController {

    private final TicketService ticketService;
    private final UserRepository userRepository;

    // Create a ticket (STUDENT and LECTURER)
    @PostMapping(consumes = {"multipart/form-data"})
    @PreAuthorize("hasAnyRole('STUDENT', 'LECTURER')")
    public ResponseEntity<?> createTicket(@ModelAttribute TicketDTO dto, Authentication auth) {
        try {
            User user = getUserFromAuth(auth);
            Ticket ticket = ticketService.createTicket(dto, user);
            return ResponseEntity.ok(Map.of(
                "message", "Ticket created successfully",
                "ticket", ticket
            ));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    // Get my tickets (STUDENT and LECTURER)
    @GetMapping("/my")
    @PreAuthorize("hasAnyRole('STUDENT', 'LECTURER')")
    public ResponseEntity<?> getMyTickets(Authentication auth) {
        User user = getUserFromAuth(auth);
        List<Ticket> tickets = ticketService.getUserTickets(user.getId());
        return ResponseEntity.ok(tickets);
    }

    // Get all tickets (ADMIN)
    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> getAllTickets() {
        List<Ticket> tickets = ticketService.getAllTickets();
        return ResponseEntity.ok(tickets);
    }

    // Get open tickets (TECHNICIAN, MANAGER, ADMIN)
    @GetMapping("/open")
    @PreAuthorize("hasAnyRole('TECHNICIAN', 'MANAGER', 'ADMIN')")
    public ResponseEntity<?> getOpenTickets() {
        List<Ticket> tickets = ticketService.getOpenTickets();
        return ResponseEntity.ok(tickets);
    }

    // Get technicians for assign dropdown (ADMIN, MANAGER)
    @GetMapping("/technicians")
    @PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
    public ResponseEntity<?> getTechnicians() {
        List<User> technicians = ticketService.getTechnicians(userRepository);
        return ResponseEntity.ok(technicians);
    }

    // Get ticket by ID
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('STUDENT', 'LECTURER', 'TECHNICIAN', 'MANAGER', 'ADMIN')")
    public ResponseEntity<?> getTicketById(@PathVariable Long id, Authentication auth) {
        try {
            Ticket ticket = ticketService.getTicketById(id);
            User currentUser = getUserFromAuth(auth);

            // Check permission: owner, assigned technician, or admin/manager
            boolean isOwner = ticket.getReportedBy().getId().equals(currentUser.getId());
            boolean isAssigned = ticket.getAssignedTo() != null &&
                                 ticket.getAssignedTo().getId().equals(currentUser.getId());
            boolean isAdmin = currentUser.getRole().equals("ADMIN") ||
                              currentUser.getRole().equals("MANAGER");

            if (!isOwner && !isAssigned && !isAdmin) {
                return ResponseEntity.status(403).body(Map.of("error", "Access denied"));
            }

            return ResponseEntity.ok(ticket);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Update my own ticket (STUDENT, LECTURER)
    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('STUDENT', 'LECTURER')")
    public ResponseEntity<?> updateTicket(@PathVariable Long id,
                                          @RequestBody TicketUpdateDTO dto,
                                          Authentication auth) {
        try {
            User user = getUserFromAuth(auth);
            Ticket ticket = ticketService.updateTicket(id, dto, user.getId());

            return ResponseEntity.ok(Map.of(
                "message", "Ticket updated successfully",
                "ticket", ticket
            ));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    // Delete my own ticket (STUDENT, LECTURER)
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('STUDENT', 'LECTURER')")
    public ResponseEntity<?> deleteTicket(@PathVariable Long id, Authentication auth) {
        try {
            User user = getUserFromAuth(auth);
            ticketService.deleteTicket(id, user.getId());

            return ResponseEntity.ok(Map.of(
                "message", "Ticket deleted successfully"
            ));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    // Assign technician (ADMIN, MANAGER)
    @PutMapping("/{id}/assign")
    @PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
    public ResponseEntity<?> assignTechnician(@PathVariable Long id, @RequestBody Map<String, Long> request) {
        try {
            Long technicianId = request.get("technicianId");
            Ticket ticket = ticketService.assignTechnician(id, technicianId, userRepository);
            return ResponseEntity.ok(Map.of(
                "message", "Technician assigned successfully",
                "ticket", ticket
            ));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    // Update ticket status (TECHNICIAN, ADMIN, MANAGER)
    @PutMapping("/{id}/status")
    @PreAuthorize("hasAnyRole('TECHNICIAN', 'ADMIN', 'MANAGER')")
    public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestBody Map<String, String> request) {
        try {
            String status = request.get("status");
            String notes = request.getOrDefault("notes", null);
            Ticket ticket = ticketService.updateStatus(id, status, notes);
            return ResponseEntity.ok(Map.of(
                "message", "Status updated successfully",
                "ticket", ticket
            ));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    // Reject the ticket (ADMIN, MANAGER)
    @PutMapping("/{id}/reject")
    @PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
    public ResponseEntity<?> rejectTicket(@PathVariable Long id, @RequestBody Map<String, String> request) {
        try {
            String reason = request.getOrDefault("reason", "No reason provided");
            Ticket ticket = ticketService.rejectTicket(id, reason);
            return ResponseEntity.ok(Map.of(
                "message", "Ticket rejected",
                "ticket", ticket
            ));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    // Add resolution notes (TECHNICIAN)
    @PutMapping("/{id}/resolve")
    @PreAuthorize("hasRole('TECHNICIAN')")
    public ResponseEntity<?> resolveTicket(@PathVariable Long id, @RequestBody Map<String, String> request) {
        try {
            String notes = request.get("notes");
            Ticket ticket = ticketService.addResolutionNotes(id, notes);
            return ResponseEntity.ok(Map.of(
                "message", "Ticket resolved",
                "ticket", ticket
            ));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    // Get tickets by status to all
    @GetMapping("/status/{status}")
    @PreAuthorize("hasAnyRole('TECHNICIAN', 'MANAGER', 'ADMIN')")
    public ResponseEntity<?> getTicketsByStatus(@PathVariable String status) {
        List<Ticket> tickets = ticketService.getTicketsByStatus(status);
        return ResponseEntity.ok(tickets);
    }

    // Get tickets by priority
    @GetMapping("/priority/{priority}")
    @PreAuthorize("hasAnyRole('TECHNICIAN', 'MANAGER', 'ADMIN')")
    public ResponseEntity<?> getTicketsByPriority(@PathVariable String priority) {
        List<Ticket> tickets = ticketService.getTicketsByPriority(priority);
        return ResponseEntity.ok(tickets);
    }

    @GetMapping("/assigned/me")
    @PreAuthorize("hasRole('TECHNICIAN')")
    public ResponseEntity<?> getMyAssignedTickets(Authentication auth) {
        User user = getUserFromAuth(auth);
        List<Ticket> tickets = ticketService.getTechnicianTickets(user.getId());
        return ResponseEntity.ok(tickets);
    }

    // Get ticket statistics
    @GetMapping("/stats")
    @PreAuthorize("hasAnyRole('MANAGER', 'ADMIN')")
    public ResponseEntity<?> getTicketStats() {
        Map<String, Object> stats = ticketService.getTicketStats();
        return ResponseEntity.ok(stats);
    }

    // Helper method
    private User getUserFromAuth(Authentication auth) {
        String email = auth.getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
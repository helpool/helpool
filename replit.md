# HELPOOL - Intercity Carpooling Platform

## Overview

HELPOOL is a comprehensive web application for intercity carpooling in India. The platform enables users to either offer rides as drivers or find rides as passengers, facilitating safe and cost-effective intercity travel. Built as a full-stack application, it features user authentication, ride management, booking systems, vehicle registration, and rating mechanisms to create a trusted carpooling ecosystem.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Authentication**: Replit Auth with OpenID Connect
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API architecture
- **File Structure**: Monorepo with shared schema between client and server

### Database Design
- **Primary Database**: PostgreSQL (via Neon)
- **ORM**: Drizzle with type-safe schema definitions
- **Key Tables**: 
  - Users (profile, verification, stats)
  - Vehicles (driver car details)
  - Rides (trip offerings with route and pricing)
  - Bookings (passenger requests and confirmations)
  - Ratings (bidirectional feedback system)
  - Sessions (authentication state)

### Authentication & Authorization
- **Provider**: Replit Auth with OIDC
- **Session Storage**: PostgreSQL-backed sessions
- **Security**: Secure HTTP-only cookies, CSRF protection
- **User Management**: Profile creation, verification status, role-based access

### API Structure
- **Authentication Routes**: Login, logout, user profile
- **Vehicle Management**: CRUD operations for driver vehicles
- **Ride Management**: Create, search, update ride offerings
- **Booking System**: Request, approve/decline, status tracking
- **Rating System**: Post-trip feedback and scoring

## External Dependencies

### Database Services
- **Neon Database**: PostgreSQL hosting with serverless capabilities
- **Connection Pooling**: @neondatabase/serverless for efficient database connections

### Authentication Services
- **Replit Auth**: OIDC-based authentication system
- **OpenID Client**: For secure authentication flow implementation

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Lucide React**: Icon library for consistent iconography
- **date-fns**: Date manipulation and formatting

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **Vite**: Fast development server and build tool
- **ESBuild**: Fast bundling for production builds
- **Drizzle Kit**: Database migration and schema management

### Runtime Dependencies
- **Express.js**: Web application framework
- **React Query**: Server state management and caching
- **Wouter**: Lightweight client-side routing
- **Zod**: Runtime type validation and schema parsing
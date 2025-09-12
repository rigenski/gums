# Frontpage Base Template

A modern Next.js 15 application template with authentication, state management, and a well-structured architecture. This template serves as a foundation for building scalable web applications with TypeScript, Tailwind CSS, and modern React patterns.

## 🚀 Tech Stack

- **Framework**: Next.js 15.2.1 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand 5
- **Data Fetching**: TanStack Query 5
- **Forms**: React Hook Form 7
- **HTTP Client**: Axios 1.8
- **UI Components**: Custom components with Motion animations
- **Icons**: Iconify React
- **Notifications**: Sonner
- **Progress Bar**: BProgress

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication route group
│   │   ├── _components/          # Auth-specific components
│   │   │   └── providers.tsx     # Auth context providers
│   │   ├── layout.tsx            # Auth layout with redirect logic
│   │   └── login/                # Login page
│   │       ├── _components/      # Login-specific components
│   │       │   └── container.tsx # Login container component
│   │       └── page.tsx          # Login page component
│   ├── (protected)/              # Protected route group
│   │   ├── _components/          # Protected-specific components
│   │   │   └── providers.tsx     # Protected context providers
│   │   ├── layout.tsx            # Protected layout with auth guard
│   │   └── dashboard/            # Dashboard page
│   │       ├── _components/      # Dashboard-specific components
│   │       │   └── container.tsx # Dashboard container component
│   │       └── page.tsx          # Dashboard page component
│   ├── (public)/                 # Public route group
│   │   ├── _components/          # Public-specific components
│   │   │   └── container.tsx     # Public container component
│   │   └── page.tsx              # Public homepage
│   ├── api/                      # API routes
│   │   └── logout/               # Logout API endpoint
│   │       └── route.ts          # Logout route handler
│   └── layout.tsx                # Root layout with global providers
├── components/                   # Shared UI components
│   ├── progress-bar.tsx          # Global progress bar component
│   └── providers.tsx             # Global context providers
├── constants/                    # Application constants
│   ├── env.ts                    # Environment variable definitions
│   └── session.ts                # Session-related constants
├── services/                     # API service layer
│   ├── auth/                     # Authentication services
│   │   ├── index.ts              # Auth service functions
│   │   └── types.ts              # Auth type definitions
│   └── user/                     # User services
│       ├── index.ts              # User service functions
│       └── types.ts              # User type definitions
├── stores/                       # State management
│   ├── auth.tsx                  # Authentication store (Zustand)
│   └── config.tsx                # Configuration store
├── styles/                       # Global styles
│   └── globals.css               # Global CSS with Tailwind imports
├── types/                        # TypeScript type definitions
│   ├── request.ts                # Request type definitions
│   └── response.ts               # Response type definitions
└── utils/                        # Utility functions
    ├── api.ts                    # API utility functions
    ├── classname.ts              # CSS class name utilities
    └── session.ts                # Session management utilities
```

## 🏗️ Architecture Overview

### Route Groups

- **`(auth)`**: Routes for unauthenticated users (login, register)
- **`(protected)`**: Routes requiring authentication (dashboard, profile)
- **`(public)`**: Publicly accessible routes (landing page)

### Authentication Flow

1. **Token Verification**: Server-side token validation in layout components
2. **Redirect Logic**: Automatic redirects based on authentication status
3. **State Management**: Zustand store for client-side auth state
4. **Session Persistence**: JWT tokens stored in secure HTTP-only cookies

### API Architecture

- **Service Layer**: Organized by domain (auth, user)
- **Type Safety**: Full TypeScript coverage for requests/responses
- **Error Handling**: Centralized error handling with custom error types
- **Interceptors**: Automatic token attachment and error handling

### State Management

- **Zustand**: Lightweight state management for client state
- **React Query**: Server state management and caching
- **Context Providers**: Component-specific state providers

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration
```

### Environment Variables

```env
NEXT_PUBLIC_BE_URL=your_backend_url
# Add other required environment variables
```

### Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🔧 Key Features

### Authentication System

- JWT-based authentication with server-side verification
- Automatic token refresh and session management
- Route protection with layout-based guards
- Secure logout with token invalidation

### UI/UX

- Responsive design with Tailwind CSS
- Custom progress bar for page transitions
- Smooth animations with Motion library
- Toast notifications with Sonner

### Developer Experience

- Full TypeScript support with strict type checking
- ESLint configuration for code quality
- Prettier integration for code formatting
- Hot reload with Turbopack

## 📝 Usage Guidelines

### Adding New Pages

1. Create page component in appropriate route group
2. Add container component for business logic
3. Implement proper TypeScript types
4. Add authentication guards if needed

### Adding New Services

1. Create service directory in `src/services/`
2. Define types in `types.ts`
3. Implement API functions in `index.ts`
4. Export functions for use in components

### State Management

1. Use Zustand for client-side state
2. Use React Query for server state
3. Create context providers for component-specific state
4. Follow the established patterns in existing stores

### Styling

1. Use Tailwind CSS utility classes
2. Create custom components for reusable UI elements
3. Follow the established design system
4. Use the `cn` utility for conditional classes

## 🤖 AI Context

This README serves as a comprehensive reference for AI assistants working with this codebase. The project follows modern React/Next.js patterns with:

- **Clear separation of concerns** with dedicated folders for different responsibilities
- **Type-safe architecture** with comprehensive TypeScript coverage
- **Authentication-first design** with proper security patterns
- **Scalable structure** that can accommodate growth
- **Modern tooling** with the latest versions of popular libraries

When working with this codebase, AI should:

- Follow the established folder structure and naming conventions
- Maintain type safety across all new code
- Respect the authentication flow and security patterns
- Use the existing service layer for API interactions
- Follow the component composition patterns established in the codebase

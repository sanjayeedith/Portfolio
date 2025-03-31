# Portfolio Project

A modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with Tailwind CSS
- 🔒 Authentication with Clerk
- 📱 Responsive Design
- 🎭 Dark/Light Mode
- 🎮 3D Elements with React Three Fiber
- 📝 TypeScript Support
- 🎯 SEO Optimized

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Clerk
- **3D Graphics:** React Three Fiber & Drei
- **UI Components:** Radix UI
- **Forms:** React Hook Form
- **Validation:** Zod
- **Animations:** Framer Motion

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── components/        # App-specific components
│   ├── dashboard/         # Dashboard pages
│   └── fonts/            # Custom fonts
├── components/            # Shared components
├── lib/                   # Utility functions
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
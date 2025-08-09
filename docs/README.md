# Routinize
A mental fitness habit-loop app inspired by *behavioural psychology principles*. It helps users build sustainable routines by tracking cue → routine → reward loops, reinforcing identity-based goals, and providing reflective feedback.

[The Vision](vision.md)

## 🌟 Features (Planned MVP)
- Habit tracking
- Identity-based goal setting
- Progress journaling & streaks
- Performance/habit analytics (v2+)

## 🔧 Tech Stack

### 📱 Frontend
- **React Native (Expo)** – Cross-platform mobile app framework
- **TypeScript** – Safer JavaScript with type checking
- **Zustand** – Lightweight global state management
- **React Navigation** – Screen routing & transitions
- **React Hook Form** – Form state & validation

### 🧠 Backend
- **Supabase**
  - PostgreSQL database
  - Auth (email, OAuth)
  - REST & GraphQL APIs
  - Realtime support

### 📦 Dev Tools
- **Expo CLI** – Easy mobile dev workflow
- **Prettier + ESLint** – Code formatting and linting
- **dotenv** – Secure environment variable management
- **Jest** – Unit testing framework (optional at MVP)

## 📍 Roadmap

### Week 1: Foundations
- [x] Create GitHub repo and project structure
- [x] Choose tech stack and tools
- [ ] Design basic Supabase schema
- [ ] Draft habit loop flow in journal / wireframe

### Week 2: Core Habit Loop (MVP UI)
- [ ] Build screens: Home, Add Habit, Journal
- [ ] Implement Zustand for local state
- [ ] Connect frontend to mock data
- [ ] Add navigation between screens

### Week 3: Auth & Backend Integration
- [ ] Set up Supabase Auth (email + optional OAuth)
- [ ] Connect frontend to Supabase DB
- [ ] Save habit loop entries to DB
- [ ] Implement basic user-specific data loading

### Week 4: Journaling, Streaks & Polish
- [ ] Create journaling screen + text input
- [ ] Add daily check-in + streak logic
- [ ] Polish UI & animations
- [ ] Write minimal tests
- [ ] Deploy to Expo for testing

### Beyond MVP
- [ ] Add habit analytics (graphs, summaries)
- [ ] Identity tag filtering
- [ ] Dark mode
- [ ] Public roadmap & feedback capture

## License
MIT


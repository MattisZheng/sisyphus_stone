# Sisyphus’ Stone

> A react application for managing daily tasks, setting up goals, and tracking progress.

## Table of Contents

## Build with

- React
- Ant Design
- react-beautiful-dnd

## Screen Shot

## Usage

## Installation

```bash
git clone https://github.com/MattisZheng/task_manager.git
npm install
```

## Documentation

### Logic Flow

```mermaid
flowchart TD

  load[Load]
  get[Check Local Storage]
  init[Init Local Storage]
  render[Render]

  load --> get --> init --> render
  get --> render

  sidebar[Side Bar]
  main[Main]
  app[App]
  sidebar -->|selectedKey| app -->|selectedRoute| main

  add_new_task --> save_to_local

```

### UI Flow

```mermaid
flowchart LR
layout[Layout]
  header[Header]
  main[Main]
    user[User]
      auth[Auth]
      account_setting[Account Setting]
    overview[Overview]
      daily[Daily]
      weekly[Weekly]
        task[Task]
      routine[Routine]
      habit[Habit]
      goal[Goal]
    history[History]
      calendar[Calendar]
      stats[Stats]
    rewards[Rewards]
    settings[Settings]
  footer[Footer]
    info[Info]
    guide[Guide]
    links[Links]
  sidebar[Side Bar]

  layout --> header & main & footer & sidebar
    header
    main --> user & overview & history & rewards & settings
      user --> auth & account_setting
      overview --> daily & weekly & routine & habit & goal
        daily & weekly --> task
    footer --> info & guide & links
```

## License

## Contribution Guide

## Dev log

v0.0.0

- [x] v0.01 Main Structure
- [x] v0.02 Layout
- [x] v0.03 Routing
- [x] v0.04 Tasks
- [x] v0.05 Routine
- [x] v0.06 Rewards
- [x] v0.07 Local Storage
- [x] v0.08 State Management
- [x] v0.09 Settings

v1.0.0 Main Feature

- [ ] v1.01 Drag and Drop
- [ ] v1.02 Clock
- [ ] v1.03 Countdown
- [ ] v1.04 Tutorial
- [ ] v1.05 Notification
- [ ] v1.06 Visualization

v2.0.0 User Experience

- [ ] v2.01 OAuth
- [ ] v2.02 Sync
- [ ] v2.03 Server
- [ ] v2.04 History
- [ ] v2.05 Calendar
- [ ] v2.06 Weather
  - [ ] Get locale
  - [ ] Settings
- [ ] v1.13 Reward History

v2.0.0 Side Features

- [ ] v2.1 Mobile
- [ ] v2.2 Desktop
- [ ] v2.3 PWA
- [ ] v2.4 Sync Calendar

v3.0.0 Backend

- [ ] Themes
- [ ] i18n
- [ ] Lite Version
- [ ] Tutorial

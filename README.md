# Task Manager

> Task Manager is built for task management, goal tracking, and reward setting.

## Table of Contents

## Build with

- React
- Redux

- Ant Design
- react-beautiful-dnd

## Screen Shot

## Usage

## Installation

## Doc

- loading
check api then local storage
if empty, load demo files
start tutorial
- 404

- header
  - clock
  - points

- user
check if logged in
  - register
  - login/logout
    - user settings
- tasks
load layout settings
load tasks
  - daily
    - daily component
  - weekly
    - weekly component
  - goals
  load goals
    - goal component
  - habits
  load habits
    - habit component
  - routines
  load routines
    - routine component
- rewards
  - reward
    - reward component
- history
load history
  - calendar
    - calendar component
  - stats
    - stats component
  - charts
    - charts component
- settings
  - themes
  - preferences

### JSON

```json
{
  "tasks": {
    "daily": [
      {
        "name": "name 1",
        "description": "description",
        "status": true
      }
    ],
    "weekly": [
      {
        "name": "weekly 1",
        "description": "description",
        "status": true
      }
    ],
    "goal": [
      {
        "name": "goal 1",
        "deadline": "2049-01-01",
        "description": "goal 1 description"
      }
    ],
    "habit": [
      {
        "name": "habit 1",
        "startDate": "1970-01-01",
        "description": "habit 1 description"
      }
    ],
    "routine": [
      {
        "time": "routine 1",
        "description": "routine 1 description"
      }
    ]
  },
  "history": [],
  "reward": [],
  "settings": []
}
```

## License

## Contribution Guide

## Dev log

v0.0.0

- [x] v0.1 Main Structure and Layout
- [x] v0.2 Routing
- [x] v0.3 Tasks Layout
- [x] v0.4 Render Tasks
- [x] v0.5 Settings
- [x] v0.6 Routine
- [x] v0.7 Rewards
- [ ] v0.8 Local Storage
- [ ] v0.9 RWD

v1.0.0 Main Feature

- [ ] v1.1 Drag and Drop
- [ ] v1.2 Clock
- [ ] v1.3 OAuth
- [ ] v1.4 Sync
- [ ] v1.5 Server
- [ ] v1.6 History
- [ ] v1.7 Calendar
- [ ] v1.8 Weather
  - [ ] Locale
  - [ ] Settings
- [ ] v1.9 Visualization
- [ ] v1.10 Countdown
- [ ] v1.11 Tutorial
- [ ] v1.12 Notification
  - [ ] Info icon
  - [ ] Banner

v2.0.0 Side Features

- [ ] v2.1 Mobile
- [ ] v2.2 Desktop
- [ ] v2.3 PWA
- [ ] v2.4 Sync Calendar

v3.0.0 Google

- [ ] Themes
- [ ] i18n
- [ ] Lite Version

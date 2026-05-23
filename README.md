# Skelly

A collection of 13 plug & play skeleton components for React. Use them as placeholders while lazy-loading content.

## Installation

```bash
npm install @_gmdev/skelly
```

## Components

### Basic

| Component | Description |
|-----------|-------------|
| `SkellyImage` | Square grey placeholder |
| `SkellyCard` | Card with image area + 3 text lines |
| `SkellyText` | Paragraph with 4 lines of decreasing width |
| `SkellyButton` | Rounded rectangle (button) |
| `SkellyInput` | Rounded rectangle (input field) |

### Composite

| Component | Description |
|-----------|-------------|
| `SkellyList` | 3 rows with avatar + 2 text lines each |
| `SkellyTable` | Header row + 3 data rows (4 columns) |
| `SkellyNavbar` | Logo + 3 link placeholders |

### Advanced

| Component | Description |
|-----------|-------------|
| `SkellyChart` | 5 vertical bars of varying heights + baseline |
| `SkellyCarousel` | Slide area + 2 arrow circles + 3 dots |
| `SkellyProfile` | Avatar (80px) + name + bio (2 lines) + 3 stats |
| `SkellyComment` | Small avatar + speech bubble with 3 lines |
| `SkellyTimeline` | Vertical line with 3 nodes (dot + 2 text lines) |

## Usage

```tsx
import { SkellyCard, SkellyTimeline, SkellyProfile } from '@_gmdev/skelly';

function MyComponent() {
  return (
    <>
      <SkellyCard animation="shiny" speed={1500} />
      <SkellyTimeline animation="flicker" speed={2000} />
      <SkellyProfile animation="shiny" />
    </>
  );
}
```

## Props

All components accept the same props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `border` | `string` | `'none'` | CSS border shorthand |
| `background` | `string` | `'#e0e0e0'` | Background color |
| `color` | `string` | — | Override color for skeleton elements |
| `animation` | `'shiny' \| 'flicker' \| 'none'` | `'none'` | Animation type |
| `speed` | `number` | `1500` | Animation duration in ms (shiny & flicker only) |

## Animations

- **shiny** — A diagonal light sweep that passes over the element
- **flicker** — Opacity oscillation (0.5 → 1.0 → 0.5)
- **none** — No animation (default)

## Examples

### Chart with shiny animation

```tsx
<SkellyChart animation="shiny" speed={1500} color="#d4d4d4" />
```

### Timeline with flicker

```tsx
<SkellyTimeline animation="flicker" speed={2000} />
```

### Custom styled profile

```tsx
<SkellyProfile
  background="#f0f0f0"
  border="2px solid #ccc"
  animation="flicker"
  speed={2000}
/>
```

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Start Storybook
npm run storybook

# Build the package
npm run build
```

## License

MIT

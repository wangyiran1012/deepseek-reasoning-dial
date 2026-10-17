# Changelog

## 0.3.11

- Replace the model picker's back button and arrow with a non-interactive muted heading, aligned with the list labels.

## 0.3.10

- Reserve model-name space from the available catalog so switching between short and long names keeps the composer control width stable.
- Keep one popup anchor while switching models or panes; measure the toolbar without temporary popup overflow affecting its position.
- Replace expanded model descriptions with compact single-line names, neutral selection checks, and hover details.
- Bound the model list to the available viewport height with internal scrolling; retain provider groups and keyboard navigation.
- Cover failed model switches, unchanged selections, long names, and host toolbar movement in regression tests.

## 0.3.8

- Reduce panel width from 296px to 248px, thumb diameter from 30px to 24px, and tighten padding.
- Match composer peer typography for both collapsed controls and the open panel, including the effort heading.
- Refresh typography with composer layout changes while keeping host layout styles isolated.
- Preserve stable effort positioning, snapping animations, thumb hover enlargement, and 64 backflow particles.

## 0.3.7

- Share isolated Shadow DOM styles between the Harness component and preview to prevent host style interference.
- Use explicit typography and built-in CSS chevrons; remove environment-dependent icon rendering and pointer layout variants.
- Remove the reset button and full-slider colored focus ring; retain neutral keyboard feedback on the thumb.
- Enlarge only the white thumb on circular hover hit detection and restore it on pointer leave.
- Increase clipped, leftward-flowing particles from 26 to 64.
- Cover isolated focus, composed pointer events, Escape, outside click, and disposal in regression tests.

## 0.3.6

- Balance panel, labels, padding and slider proportions using native dimensions.
- Reserve fixed space for effort labels to prevent toolbar and popup movement between levels.
- Keep the popup within the viewport on opening and resize; retain its anchor while switching effort.
- Send maximum-effort particles from right to left with subtle trails clipped inside the slider.
- Keep discrete snapping, smooth transitions, keyboard controls and reduced-motion support.

## 0.3.5

- Snap to the nearest reasoning level with synchronized thumb and fill easing.
- Fade in the purple gradient and clipped particles at maximum effort.
- Preserve slider elements across commits so transitions remain uninterrupted.
- Keep keyboard controls at real effort levels, respect reduced motion, and retain the 75% popup size.
- Add regression checks for snapping, keyboard selection, and element continuity.

## 0.3.4

- Compact combined model and reasoning control for DeepSeek Harness Desktop.
- DeepSeek reasoning levels: off, low, high, max.
- Purple shimmer and clipped particles at the highest supported level.
- Popup displayed at 75% of the base size.
- Keyboard adjustment, default reset, failure rollback, host lock support and cleanup.

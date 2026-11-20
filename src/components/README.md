# PigmentWash

`PigmentWash` is a reusable visual effect. With no props, it renders an
animated fluid pigment shape. To apply the treatment to a transparent artwork,
pass an imported asset as `textureSrc`:

```tsx
import compassTexture from '../assets/compass.png'
import { PigmentWash } from './PigmentWash'

<PigmentWash textureSrc={compassTexture} tint="#70d2dc" intensity={0.75} />
```

Use `className` to size or position an instance and `animated={false}` to keep
it still. Each SVG instance creates unique filter and gradient IDs, so several
instances can safely appear on the same page.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run storybook`
Shows available components in the browser using storybook.

## Components

### FoldView

A component that folds or unfolds to show or hide content.

#### FoldView props

| name         |   type    |            default |                                                                                   description |
| ------------ | :-------: | -----------------: | --------------------------------------------------------------------------------------------: |
| base         | Component |  `<div>Base</div>` |                                                      The base component. Hidden while folded. |
| inner        | Component | `<div>Inner</div>` |                                          The inner part that folds down. Hidden while folded. |
| outer        | Component | `<div>Outer</div>` |                                           The outer part that folds down. Shown while folded. |
| open         |  Boolean  |            `false` | Controls whether the component is opened or closed. Changing this value beings the animation. |
| setTo        |  Number   |             `null` |                                                Controls the angle of the fold position. 0-180 |
| perspective  |  Number   |             `1000` |                                                                                3d perspective |
| cascade      |  Boolean  |            `false` |                                        Make nested comoponents cascade the folding animation. |
| blockCascade |  Boolean  |            `false` |                                   If this component is nested, block the cascading animation. |

### SpaceDock

A component with draggable and dockable children.
Children elements are draggable and can be animated towards the dock component when the dock is clicked.

#### SpaceDock props

| name          |     type      |                               description |
| ------------- | :-----------: | ----------------------------------------: |
| DockComponent |   Component   |                       The dock component. |
| children      | React.Element | Can be a single React Element or an array |
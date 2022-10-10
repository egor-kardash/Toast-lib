# Toast-lib

## Installation

**npm**

```
npm install toast-lib
```

**yarn**

```
yarn add toast-lib
```

## Demo

[Open demo](https://6343c0bc7b47cd6de45b2178-kuzlxozduq.chromatic.com/?path=/story/toast-library--toast)

## Usage

```jsx
import React from 'react';

import { ToastContainer, addToast } from 'toast-lib';

const App = () => {
  const showToast = () => {
    addToast({
      type: 'Warning',
      description: 'Toast example',
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show toast</button>
      <ToastContainer />
    </div>
  );
};
```

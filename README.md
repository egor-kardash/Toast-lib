# Toast-lib

## Installation

**npm**

```
npm install react-toast-k-lib
```

**yarn**

```
yarn add react-toast-k-lib
```

## Demo

[Open demo](https://6343c0bc7b47cd6de45b2178-kuzlxozduq.chromatic.com/?path=/story/toast-library--toast)

## Usage

```jsx
import React from 'react';

import { ToastProvider, toastService } from 'react-toast-k-lib';

const App = () => {
  const containerRef = useToastContainer();

  const handleClick = () => {
    toastService.addToast({
      type: 'Info',
      description: 'Toast Example'
    })
  }
  };

  return (
    <div>
      <button onClick={handleClick}>Show toast</button>
      <ToastProvider />
    </div>
  );
};
```

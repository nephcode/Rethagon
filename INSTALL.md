# INSTALL

STEP 1
```
bun create vite@latest . --template react-ts 
```

ADD REACT@19rc in `package.json``
````
  "dependencies": {
    "@types/react": "npm:types-react@rc",
    "@types/react-dom": "npm:types-react-dom@rc"
  },
  "overrides": {
    "@types/react": "bun:types-react@rc",
    "@types/react-dom": "bun:types-react-dom@rc"
  },
  ````


STEP 2 
````
bun install && bun run dev
```
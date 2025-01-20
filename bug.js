```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```
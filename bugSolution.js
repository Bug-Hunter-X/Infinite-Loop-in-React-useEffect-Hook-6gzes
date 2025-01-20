```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way: Empty dependency array ensures the effect runs only once after initial render
    // Adding a conditional statement to prevent count update ensures no infinite loop
    let mounted = true;
    if (mounted) {
      setCount(prevCount => prevCount + 1);
      mounted = false;
    }
    return () => { mounted = false;};
  }, []);

  return <div>Count: {count}</div>;
}
```
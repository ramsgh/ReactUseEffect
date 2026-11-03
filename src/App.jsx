import DependencyVariations from '../DependencyVariations.jsx';
import CleanupExample from '../CleanupExample.jsx';
import DataFetchingWithState from '../DataFetchingWithState.jsx';
import CustomHooksDemo from '../CustomHooksDemo.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <header className="page-header">
        <p className="eyebrow">React Learning Lab</p>
        <h1>useEffect Examples</h1>
        <p className="subtitle">
          Explore how effect timing, cleanup, async fetching, and custom hooks work in React.
        </p>
      </header>

      <main className="examples-grid">
        <section className="example-card">
          <DependencyVariations />
        </section>

        <section className="example-card">
          <CleanupExample />
        </section>

        <section className="example-card">
          <DataFetchingWithState />
        </section>

        <section className="example-card">
          <CustomHooksDemo />
        </section>
      </main>
    </div>
  );
}

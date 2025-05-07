export default class ReactCustomElement extends HTMLElement {
    connectedCallback() {
      const mountPoint = document.createElement('div');
      this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

      import('../App.jsx').then((module) => {
        const App = module.default;
        const root = createRoot(mountPoint);
        root.render(
            <StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </StrictMode>
        );
      });
    }
  }

  customElements.define('react-custom-element', ReactCustomElement);

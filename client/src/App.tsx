import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

/** Esconde o banner de preview (ex.: "This page is not live...") injetado pelo Cursor/IDE */
function useHidePreviewBanner() {
  useEffect(() => {
    const hide = () => {
      const walk = (el: Element) => {
        if (el instanceof HTMLElement) {
          // Nunca esconder body nem #root
          if (el === document.body || el.id === "root") {
            for (const child of el.children) walk(child);
            return;
          }
          const text = el.textContent || "";
          if (
            (text.includes("This page is not live") || text.includes("cannot be shared directly")) &&
            !el.closest("#root")
          ) {
            el.style.setProperty("display", "none", "important");
            return; // não percorrer filhos do banner
          }
        }
        for (const child of el.children) walk(child);
      };
      walk(document.body);
    };
    hide();
    const observer = new MutationObserver(hide);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
}


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  useHidePreviewBanner();
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

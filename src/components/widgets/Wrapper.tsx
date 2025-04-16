import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { twMerge } from "tailwind-merge";

interface SectionWrapperProps {
  id?: string;
  isDark?: boolean;
  bgClass?: string; // Add this line
  classes?: Record<string, string>;
}

export const Wrapper = component$((props: SectionWrapperProps) => {
  const { id, isDark, bgClass, classes = {} } = props;
  const location = useLocation();

  const isHomePage = location.url.pathname === "/";
  const paddingY = isHomePage
    ? "py-0.5 "
    : "py-0.5";

  return (
    <section
      class={twMerge(
        "relative scroll-mt-16",
        (!isHomePage || isDark) ? "bg-background" : "bg-background",
        bgClass // Apply custom background class if passed
      )}
      {...(id ? { id } : {})}
    >
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-0.5 md:px-6",
          paddingY,
          classes?.container
        )}
      >
        <Slot />
      </div>
    </section>
  );
});

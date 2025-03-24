import { component$ } from "@builder.io/qwik";  // Add useLocation import
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";





interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "",    classes = {}, isDark = false } = props;


  return (
    <section class="relative scroll-mt-16" {...(id ? { id } : {})}>
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0 bg-gray-100 dark:bg-gray-800")}></div>
        </slot>
      </div>
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-4 md:px-6 py-8 md:py-12 lg:py-16 text-default",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
           <div class="sm:mx-auto h-80 hidden sm:block">
            <p></p>
              </div>
      </div>
    </section>
  );
});
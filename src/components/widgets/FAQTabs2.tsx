import { component$, useSignal } from "@builder.io/qwik";
import { Tabs } from "../ui/Tabs";
import { Card } from "../ui/Card";
import { ItemGrid } from "../ui/ItemGrid";
import { twMerge } from "tailwind-merge";


interface FAQItem {
  icon: any;
  title: string;
  description: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

interface Props {
  isDark?: boolean;
  classes?: any;
  faqData: FAQSection[];
}

export default component$((props: Props) => {
  const { isDark = false, classes, faqData } = props;
  const selectedTabIndex = useSignal(0); // 🟢 Track which tab is selected

  return (
    <Tabs.Root class="max-w-6xl">
      <Tabs.List class="grid w-full grid-cols-4">
        {faqData.map((section, index) => (
          <Tabs.Tab
            key={section.title}
            onClick$={() => {
              selectedTabIndex.value = index; // 🟢 Update when tab is clicked
            }}
          >
            {section.title}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {faqData.map((section, index) => (
        <Tabs.Panel key={selectedTabIndex.value === index ? `active-${index}` : `inactive-${index}`}>
          <Card.Root>
            <ItemGrid
              id={`faq-grid-${index}-${selectedTabIndex.value}`} // 🟢 Unique ID per render
              items={section.items}
              classes={{
                container: twMerge(
                  "md:grid-cols-2 px-2 py-2 rounded-base",
                  isDark ? "bg-background" : "bg-background"
                ),
                panel: twMerge(
                  "bg-primary/5 rounded-none",
                  "[&:nth-child(1)]:rounded-t-md [&:nth-child(1)]:md:rounded-tl-md [&:nth-child(1)]:md:rounded-tr-none",
                  "[&:nth-last-child(1)]:rounded-b-md [&:nth-last-child(1)]:md:rounded-br-md [&:nth-last-child(1)]:md:rounded-bl-none",
                  "[&:nth-child(2)]:md:rounded-tr-md",
                  "[&:nth-last-child(2)]:md:rounded-bl-md",
                  "[&:not(:nth-child(1)):not(:nth-child(2)):not(:nth-last-child(2)):not(:nth-last-child(1))]:md:rounded-none"
                ),
                title: "md:text-[1.3rem]",
                icon:
                  "text-primary dark:bg-primary rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4",
                ...(classes?.items ?? {}),
              }}
            />
          </Card.Root>
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
});

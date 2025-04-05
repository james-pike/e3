import { $, component$, type PropsOf } from '@builder.io/qwik';
import { cn } from '@qwik-ui/utils';
import { useIsDark } from '~/utils/darkUtils'; // Adjust path to where useIsDark is defined

type InputProps = PropsOf<'input'> & {
  error?: string;
  isDark?: boolean; // Add isDark to props
};

export const Input = component$<InputProps>(
  ({ name, error, id, ['bind:value']: valueSig, value, onInput$, isDark: propsIsDark, ...props }) => {
    const inputId = id || name;
    const isDark = useIsDark(propsIsDark); // Use the hook to resolve isDark

    return (
      <>
        <input
          {...props}
          aria-errormessage={`${inputId}-error`}
          aria-invalid={!!error}
          value={valueSig ? valueSig.value : value}
          onInput$={valueSig ? $((__, el) => (valueSig.value = el.value)) : onInput$}
          class={cn(
            'flex h-12 w-full rounded-base border border-input px-3 py-1 text-sm text-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
            isDark ? 'bg-muted' : 'bg-background', // Swap bg-background to bg-muted when isDark is true
            props.class
          )}
          id={inputId}
        />
        {error && (
          <div id={`${inputId}-error`} class="text-alert mt-1 text-sm">
            {error}
          </div>
        )}
      </>
    );
  },
);
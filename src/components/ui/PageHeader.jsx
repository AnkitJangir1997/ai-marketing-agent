import Link from "next/link";
import Button from "./Button";

export default function PageHeader({
  title,
  description,
  buttonText,
  buttonHref,
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {title}
        </h1>

        {description && (
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>

      {buttonText && buttonHref && (
        <Link href={buttonHref} passHref>
          <Button>{buttonText}</Button>
        </Link>
      )}
    </div>
  );
}
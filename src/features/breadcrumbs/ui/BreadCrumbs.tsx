import { Breadcrumbs } from "@mui/material";
import Link, { type LinkProps } from "@mui/material/Link";
import {
  Link as RouterLink,
  // Route,
  // Routes,
  // MemoryRouter,
  // useLocation,
} from "react-router";
import type { Category } from "@/entities/category/model/types.ts";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return (
    <Link {...props} component={RouterLink as any} color="textSecondary" />
  );
}

export const getCategoryFullPath = (categories: Category[]): string => {
  return categories
    .sort((a, b) => a.level - b.level)
    .map((cat) => cat.slug)
    .join("/");
};

type Props = {
  categories: Category[];
};

export function BreadCrumbs({ categories }: Props) {
  const categoryPaths = categories.map((_, index) =>
    getCategoryFullPath(categories.slice(0, index + 1)),
  );
  return (
    <Breadcrumbs aria-label="Breadcrumbs">
      <LinkRouter to="/" key={"/"} underline="hover">
        Главная
      </LinkRouter>

      {categories.map((category, index) => (
        <LinkRouter
          key={category.id}
          to={`/catalog/${categoryPaths[index]}`}
          underline="hover"
        >
          {category.name}
        </LinkRouter>
      ))}
    </Breadcrumbs>
  );
}

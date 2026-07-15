import { BookOpen, Calculator, ChefHat, Package, Star, X } from "lucide-react";
import type { Tab } from "../lib/tabs";
import { Button } from "./Button";

interface SidebarProps {
  tab: Tab;
  onTabChange: (tab: Tab) => void;
  open: boolean;
  onClose: () => void;
}

const ITEMS: { tab: Tab; label: string; icon: typeof BookOpen }[] = [
  { tab: "all", label: "Receitas", icon: BookOpen },
  { tab: "favorites", label: "Minhas Combinações", icon: Star },
  { tab: "materials", label: "Materiais", icon: Package },
  { tab: "creator", label: "Criar Receita", icon: ChefHat },
  { tab: "calculator", label: "Calculadora", icon: Calculator },
];

export function Sidebar({ tab, onTabChange, open, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-obsidian/80 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-none flex-col border-r border-ash-steel/30 bg-deep-steel transition-transform duration-300 ease-out md:static md:z-auto md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Navegação principal"
      >
        <div className="flex items-center justify-between border-b border-ash-steel/20 p-4 md:hidden">
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="Hylian Cookbook"
            className="h-8 w-auto"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="text-ash-steel hover:text-rune-paper"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-3">
          {ITEMS.map(({ tab: itemTab, label, icon: Icon }) => (
            <Button
              key={itemTab}
              variant="nav"
              active={tab === itemTab}
              icon={<Icon className="h-4 w-4" aria-hidden="true" />}
              aria-pressed={tab === itemTab}
              onClick={() => {
                onTabChange(itemTab);
                onClose();
              }}
            >
              {label}
            </Button>
          ))}
        </nav>
      </aside>
    </>
  );
}

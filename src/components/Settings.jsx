import { useState } from 'react';
import PropTypes from 'prop-types';
import { SettingsIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const Settings = ({ setTheme, theme, setCursorStyle }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden md:block">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className="p-2 rounded-xs border bg-foreground dark:bg-white transition-colors">
            <SettingsIcon className="h-5 w-5 text-background dark:text-black hover:text-background dark:hover:bg-primary" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] border bg-background">
          <div className="flex flex-col gap-4 p-3">
            {/* Theme Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-foreground">Dark Mode</span>
              <Switch 
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              />
            </div>

            {/* Cursor Style Selector */}
            <div className="flex flex-col gap-2">
              <span className="text-foreground">Cursor Style</span>
              <Select defaultValue="default" onValueChange={setCursorStyle}>
                <SelectTrigger className="border bg-background">
                  <SelectValue placeholder="Select cursor style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="animated">Animated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

Settings.propTypes = {
  setTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  setCursorStyle: PropTypes.func.isRequired
};

export default Settings; 
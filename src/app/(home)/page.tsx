import { Button } from "@/components/ui/button";

import { Icon } from "@iconify/react";
export default function Home() {
  return (
    <>
      <Button>Button</Button>
      <Icon icon="mdi-light:home" width={24} height={24} />
      <Icon icon="carbon:aperture" width={32} height={32} />
      <Icon icon="vscode-icons:default-folder-opened" width={32} height={32} />
    </>
  );
}

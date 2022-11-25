import {
  Header,
  HeaderName,
  SkipToContent,
  HeaderMenuButton,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenu,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderContainer,
} from "@carbon/react";

import {
  Search,
  Notification as NotificationIcon,
  Switcher,
} from "@carbon/react/icons";

export function Navbar(): JSX.Element {
  const action = (input: string): void => {
    console.log(input);
  };

  return (
    <HeaderContainer
      className="main-navbar"
      render={({
        isSideNavExpanded,
        onClickSideNavExpand,
      }: {
        isSideNavExpanded: () => boolean;
        onClickSideNavExpand: () => void;
      }) => (
        <>
          <Header aria-label="IBM Platform Name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="">
              matejpalenik.com
            </HeaderName>
            <HeaderNavigation aria-label="matejpalenik.com">
              <HeaderMenuItem href="#">About</HeaderMenuItem>
              <HeaderMenu aria-label="Link 4" menuLinkName="Portfolio">
                <HeaderMenuItem href="#one">Frontend</HeaderMenuItem>
                <HeaderMenuItem href="#two">Backend</HeaderMenuItem>
                <HeaderMenuItem href="#three">AWS</HeaderMenuItem>
              </HeaderMenu>
              <HeaderMenuItem href="#">Contact</HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Search"
                onClick={action("search click")}
              >
                <Search size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="Notifications"
                onClick={action("notification click")}
              >
                <NotificationIcon size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="App Switcher"
                onClick={action("app-switcher click")}
                tooltipAlignment="end"
              >
                <Switcher size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        </>
      )}
    />
  );
}

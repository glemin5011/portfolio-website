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
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  useTheme,
} from "@carbon/react";

import {
  Search,
  Notification as NotificationIcon,
  Switcher,
  Light,
  Asleep,
} from "@carbon/react/icons";
import { useAppDispatch } from "../../../app/hooks/hooks";
import { changeTheme } from "../../../app/store/appSlice";

import "./Navbar.scss";

export function Navbar(): JSX.Element {
  const action = (input: string): void => {
    console.log(input);
  };

  const { theme } = useTheme();

  const dispatch = useAppDispatch();

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
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}
            >
              <SideNavItems>
                <HeaderSideNavItems>
                  <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                  <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                    <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                  </HeaderMenu>
                </HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
            <HeaderGlobalBar>
              {theme === "white" ? (
                <HeaderGlobalAction
                  aria-label="Dark Mode"
                  onClick={() => dispatch(changeTheme({ theme: "g100" }))}
                >
                  <Asleep size={20} />
                </HeaderGlobalAction>
              ) : (
                <HeaderGlobalAction
                  aria-label="Light Mode"
                  onClick={() => dispatch(changeTheme({ theme: "white" }))}
                >
                  <Light size={20} />
                </HeaderGlobalAction>
              )}
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

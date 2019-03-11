import React from "react";

// reactstrap components
import { Button, NavItem, NavLink, Nav, TabContent, TabPane } from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Buttons
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Use Bootstrap’s custom button styles for actions in forms, dialogs,
          and more with support for multiple sizes, states, and more.
        </p>
        <hr />
        <h2 id="examples">Examples</h2>
        <p>
          Bootstrap includes several predefined button styles, each serving its
          own semantic purpose, with a few extras thrown in for more control.
        </p>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="buttons-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="buttons-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="buttons-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="buttons-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="buttons-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="buttons-component-tab"
              className="tab-example-result fade show active"
              id="buttons-component"
              role="tabpanel"
            >
              <Button color="primary" type="button">
                Button
              </Button>
              <Button className="btn-icon btn-3" color="primary" type="button">
                <span className="btn-inner--icon">
                  <i className="ni ni-bag-17" />
                </span>
                <span className="btn-inner--text">With icon</span>
              </Button>
              <Button className="btn-icon btn-2" color="primary" type="button">
                <span className="btn-inner--icon">
                  <i className="ni ni-atom" />
                </span>
              </Button>
            </TabPane>
            <TabPane
              aria-labelledby="buttons-html-tab"
              className="fade"
              id="buttons-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="buttons-colors-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="buttons-colors-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="buttons-colors-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="buttons-colors-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="buttons-colors-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="buttons-colors-component-tab"
              className="tab-example-result fade show active"
              id="buttons-colors-component"
              role="tabpanel"
            >
              <Button color="default" type="button">
                Default
              </Button>
              <Button color="primary" type="button">
                Primary
              </Button>
              <Button color="secondary" type="button">
                Secondary
              </Button>
              <Button color="info" type="button">
                Info
              </Button>
              <Button color="success" type="button">
                Success
              </Button>
              <Button color="danger" type="button">
                Danger
              </Button>
              <Button color="warning" type="button">
                Warning
              </Button>
            </TabPane>
            <TabPane
              aria-labelledby="buttons-colors-html-tab"
              className="fade"
              id="buttons-colors-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="outline-buttons">Outline buttons</h2>
        <p>
          In need of a button, but not the hefty background colors they bring?
          Replace the default modifier classes with the{" "}
          <code className="highlighter-rouge">.btn-outline-*</code>
          ones to remove all background images and colors on any button.
        </p>
        <div className="ct-example">
          <Nav
            className="nav-tabs-code"
            id="buttons-outline-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="buttons-outline-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="buttons-outline-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="buttons-outline-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="buttons-outline-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="buttons-outline-component-tab"
              className="tab-example-result fade show active"
              id="buttons-outline-component"
              role="tabpanel"
            >
              <Button color="default" outline type="button">
                Default
              </Button>
              <Button color="primary" outline type="button">
                Primary
              </Button>
              <Button color="secondary" outline type="button">
                Secondary
              </Button>
              <Button color="info" outline type="button">
                Info
              </Button>
              <Button color="success" outline type="button">
                Success
              </Button>
              <Button color="danger" outline type="button">
                Danger
              </Button>
              <Button color="warning" outline type="button">
                Warning
              </Button>
            </TabPane>
            <TabPane
              aria-labelledby="buttons-outline-html-tab"
              className="fade"
              id="buttons-outline-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="sizes">Sizes</h2>
        <p>
          Fancy larger or smaller buttons? Add{" "}
          <code className="highlighter-rouge">.btn-lg</code>
          or <code className="highlighter-rouge">.btn-sm</code>
          for additional sizes.
        </p>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="buttons-lg-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="buttons-lg-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="buttons-lg-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="buttons-lg-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="buttons-lg-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="buttons-lg-component-tab"
              className="tab-example-result fade show active"
              id="buttons-lg-component"
              role="tabpanel"
            >
              <Button color="primary" size="lg" type="button">
                Large button
              </Button>
              <Button color="secondary" size="lg" type="button">
                Large button
              </Button>
            </TabPane>
            <TabPane
              aria-labelledby="buttons-lg-html-tab"
              className="fade"
              id="buttons-lg-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="buttons-sm-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="buttons-sm-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="buttons-sm-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="buttons-sm-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="buttons-sm-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="buttons-sm-component-tab"
              className="tab-example-result fade show active"
              id="buttons-sm-component"
              role="tabpanel"
            >
              <Button color="primary" size="sm" type="button">
                Small button
              </Button>
              <Button color="secondary" size="sm" type="button">
                Small button
              </Button>
            </TabPane>
            <TabPane
              aria-labelledby="buttons-sm-html-tab"
              className="fade"
              id="buttons-sm-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <p>
          Create block level buttons—those that span the full width of a
          parent—by adding <code className="highlighter-rouge">.btn-block</code>
          .
        </p>
        <div className="ct-example">
          <Nav className="nav-tabs-code" id="buttons-block-tab" role="tablist">
            <NavItem>
              <NavLink
                aria-controls="buttons-block-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="buttons-block-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="buttons-block-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="buttons-block-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="buttons-block-component-tab"
              className="tab-example-result fade show active"
              id="buttons-block-component"
              role="tabpanel"
            >
              <Button block color="primary" size="lg" type="button">
                Block level button
              </Button>
              <Button block color="secondary" size="lg" type="button">
                Block level button
              </Button>
            </TabPane>
            <TabPane
              aria-labelledby="buttons-block-html-tab"
              className="fade"
              id="buttons-block-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="active-state">Active state</h2>
        <p>
          Buttons will appear pressed (with a darker background, darker border,
          and inset shadow) when active.{" "}
          <strong>
            There’s no need to add a class to{" "}
            <code className="highlighter-rouge">{`<button>`}</code>s as they use
            a pseudo-class
          </strong>
          . However, you can still force the same active appearance with{" "}
          <code className="highlighter-rouge">.active</code>
          (and include the <code>aria-pressed="true"</code>
          attribute) should you need to replicate the state programmatically.
        </p>
        <div className="ct-example">
          <Nav
            className="nav-tabs-code"
            id="buttons-state-active-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="buttons-state-active-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="buttons-state-active-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="buttons-state-active-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="buttons-state-active-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="buttons-state-active-component-tab"
              className="tab-example-result fade show active"
              id="buttons-state-active-component"
              role="tabpanel"
            >
              <Button
                aria-pressed={true}
                className="active"
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
                role="button"
                size="lg"
              >
                Primary link
              </Button>
              <Button
                aria-pressed={true}
                className="active"
                color="secondary"
                href="#pablo"
                onClick={e => e.preventDefault()}
                role="button"
                size="lg"
              >
                Link
              </Button>
            </TabPane>
            <TabPane
              aria-labelledby="buttons-state-active-html-tab"
              className="fade"
              id="buttons-state-active-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
        <h2 id="disabled-state">Disabled state</h2>
        <p>
          Make buttons look inactive by adding the{" "}
          <code className="highlighter-rouge">disabled</code>
          boolean attribute to any{" "}
          <code className="highlighter-rouge">{`<button>`}</code>
          element.
        </p>
        <div className="ct-example">
          <Nav
            className="nav-tabs-code"
            id="buttons-state-disabled-tab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="buttons-state-disabled-component"
                aria-selected={true}
                className="active"
                data-toggle="tab"
                href="#pablo"
                id="buttons-state-disabled-component-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                Result
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="buttons-state-disabled-html"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="buttons-state-disabled-html-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                HTML
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane
              aria-labelledby="buttons-state-disabled-component-tab"
              className="tab-example-result fade show active"
              id="buttons-state-disabled-component"
              role="tabpanel"
            >
              <Button color="primary" disabled size="lg" type="button">
                Primary button
              </Button>
              <Button color="secondary" disabled size="lg" type="button">
                Button
              </Button>
            </TabPane>
            <TabPane
              aria-labelledby="buttons-state-disabled-html-tab"
              className="fade"
              id="buttons-state-disabled-html"
              role="tabpanel"
            />
          </TabContent>
        </div>
      </>
    );
  }
}

export default Buttons;
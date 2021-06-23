import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const SubMenu = ({ item, index }) => {
  return (
    <>
      {Array.isArray(item.children) ? (
        <HoverNavLink key={index} to={item.link}>
          {item.title}
          <NavSubMenu>
            {item.children.map((serviceItem, serviceIndex) => (
              <NavLink key={serviceIndex} to={serviceItem.node.slug}>
                {serviceItem.node.title}
              </NavLink>
            ))}
          </NavSubMenu>
        </HoverNavLink>
      ) : (
        <NavLink key={index} to={item.link}>
          {item.title}
        </NavLink>
      )}
    </>
  );
};

export default SubMenu;

const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;

  &:hover,
  &:focus {
    color: #f1f1f1;
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    padding: 8px;
    text-decoration: none;
    font-size: 25px;
    display: block;
    transition: 0.3s;
  }
`;

const HoverNavLink = styled(NavLink)`
  &:hover > ${NavSubMenu} {
    display: block;
  }
`;

const NavSubMenu = styled.div`
  display: none;
  position: absolute;
  left: 180px;
  background: #111;
  top: 0;
  width: 180px;

  li {
    background: #111;
  }
`;

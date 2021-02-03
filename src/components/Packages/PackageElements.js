/**
 * @author Olawale
 * @email olawale.akinodanye@gmail.com
 * @create date 2021-02-03 14:17:55
 * @modify date 2021-02-03 14:25:48
 * @desc [description]
 */
import styled from "styled-components";
import { Link } from "react-router-dom";
import PlansBg from "../../assets/plans-background.jpg";

export const Main = styled.main`
  padding-top: 2.25rem;
`;

export const Package = styled.div`
  margin: 1.87rem 0;
  position: relative;
  width: 80%;
  &.free {
    float: right;
    background: rgba(234, 252, 237, 0.95);
    border-right: none;
    border-left: 4px solid #0e4f1f;
  }
  &.plus {
    background: rgba(213, 255, 220, 0.9);
  }
  &.premium {
    background: rgba(14, 79, 31, 0.95);
    h1 {
      color: white;
    }
  }
  &:hover,
  &:active {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border-color: #ff5454;
  }
`;

export const Background = styled.div`
  background: url(${PlansBg});
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const ClearFix = styled.div`
  clear: both;
`;

export const PackageLink = styled(Link)`
  display: block;
  cursor: pointer;
  text-decoration: none;
  padding: 2rem;
  color: inherit;
`;

export const PackageName = styled.h1``;

export const Badge = styled.h1`
  position: absolute;
  font-size: 0.75rem;
  padding: 0.5rem;
  right: 0;
  top: 0;
  margin: 1.25rem;
  background-color: #ff5454;
`;

export const PackageSubtitle = styled.h2`
  color: #979797;
`;

export const PackageDescription = styled.p`
  border: 1px solid #0e4f1f;
  padding: 1rem;
  background: white;
  font-size: 1.25rem;
  color: #0e4f1f;
`;

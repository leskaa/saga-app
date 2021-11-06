import React from "react";
import { useNavigate } from "react-router-dom";


export function NavigateToRoute(path: string) {
  const navigate = useNavigate();
  navigate(path);
} 
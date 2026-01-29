export const createElement = (name, style) => {
  const c1 = document.createElement(name);
  c1.style.width = style?.width;
  c1.style.height = style?.height;
  c1.style.borderRadius = style?.borderRadius;
  c1.style.background = style?.background;
  return c1;
};

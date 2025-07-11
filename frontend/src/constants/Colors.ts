const baseColor = {
    white: '#FFFFFF',
    primaryGreen:"#004F2A",
    secondaryGreen:"#2E8B57",
    lightBackground:"#F4F1BB",
    warmAccent:"#8B5A2B",
    neutralGray:"#A9A9A9",
}

type BaseColor = typeof baseColor;

interface ColorPalette {
    white: string;
    primary: string;
    secondary: string;
    light: string;
    warm: string;
    neutral: string;
    green: string;
    red: string;
}

const createColorPalette = (base: BaseColor):ColorPalette => ({
    white: base.white,
    primary: base.primaryGreen,
    secondary: base.secondaryGreen,
    light: base.lightBackground,
    warm: base.warmAccent,
    neutral: base.neutralGray,
    green: "#28a745", 
    red: "#dc3545",   
});

export const colors = createColorPalette(baseColor);
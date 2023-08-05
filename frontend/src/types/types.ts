import { MouseEventHandler } from "react";

export type TNavbarInfo = {
    brandTextFirst: string;
    brandTextLast: string;
    btnText: string;
}

export type THeroInfo = {
    highlightText: string;
    headingText: string;
    descriptionText: string;
    imgSrc: string;
    imgAlt: string;
}

export type TBikeCatalogueInfo = {
    headingText: string;
    descriptionText: string;
}

export type TButtonProps = {
    title: string;
    btnStyle?: string;
    type?: 'button' | 'submit';
    iconSrc?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
}

export type TBikeProps = {
    _id?: string;
    name: string;
    price: number;
    imgSrc: string;
    frameSpecifications: TFrameSpecifications;
    otherBikeSpecs: TOtherBikeSpecs;
    componentDetails: TComponentDetails;
};

type TFrameSpecifications = {
    brand: string;
    model: string;
    type: string;
};

type TOtherBikeSpecs = {
    type_of_brakes: string;
    wheel_size: number;
    frame_material: string;
};

type TComponentDetails = {
    fork: string;
    saddle: string;
    brakes: string;
    stem: string;
    cassette: string;
    seatpost: string;
    leviers: string;
    handlebar: string;
    rear_tire: string;
    crank_arms: string;
    front_tire: string;
    wheelset: string;
    crank_arms_length: string;
    front_derailleur: string;
    suspension: string;
    chainring_range_gearing: number;
    suspension_travel: string;
    cassette_range_gearing: string;
};

export type TBikeDetailsProps = {
    isOpen: boolean;
    closeModal: () => void;
    bike: TBikeProps;
}

// type for SearchBrand component
export type TBrandsProps = {
    brand: string;
    setBrand: (brand: string) => void;
}

// type filtering props for fetching data
export type TFilterProps = {
    brand: string;
    price: string;
}

// type for SearchBar
export type TSearchBarProps = {
    setBrand: React.Dispatch<React.SetStateAction<string>>
}

// type for Select
export type TSelectProps = {
    options: TOptionProps[];
    setPrice: React.Dispatch<React.SetStateAction<string>>
}
type TOptionProps = {
    title: string;
    value: string;
}

// type for review
export type TReviewProps = {
    reviewer_name: string;
    designation: string;
    photo_url: string;
    review: string;
}

// type for ScrollToTop button
export type TScrollToTopProps = {
    style: string;
}

// NavList props
export type TNavListProps = {
    targetId: string;
    children: string;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
    customStyle?: string;
}

// Chip Props
export type TChipProps = {
    title: string;
    chipStile?: string
}

// blog props
export type TBlogProps = {
    _id?: string;
    blog_title: string;
    blog_cover: string;
    blog_read_time: string;
    introduction: string;
    points: TPoints[];
    conclusion: string;
}
export type TPoints = {
    _id?: string;
    point_title: string;
    point_description: string;
}

// mission card props
export type missionCardProps = {
    id?: string,
    title: string;
    description: string; 
}
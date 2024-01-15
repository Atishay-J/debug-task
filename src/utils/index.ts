type fileFormatType = "png" | "svg" | "jpg" | "gif" | "json";


export const getCloudfareUrl = (
    name: string,
    fileFormat?: fileFormatType
): string => {
    const FILES_PATH = "assets/images";

    return `${
        process.env.CLOUDFARE_URL ?? "https://images.ziffichess.com/"
    }${FILES_PATH}/${name}.${fileFormat ?? "png"}`;
};


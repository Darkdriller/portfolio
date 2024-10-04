const styles: {
    paddingX: string;
    paddingY: string;
    padding: string;
    heroHeadText: string;
    heroSubText: string;
    sectionHeadText: string;
    sectionSubText: string;
    bgColorLight: string;
    bgColorDark: string;
} = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",

    heroHeadText:
      "font-black text-gray-900 dark:text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-gray-900 dark:text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  
    sectionHeadText:
      "text-gray-900 dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
    bgColorLight: "bg-gradient-to-br from-[#ece7e1] via-[#d1d6eb] to-[#ece7e1]",
    bgColorDark: "bg-gradient-to-br dark:from-[#11111b] dark:via-[#1a1a29] dark:to-[#11111b]",
};

export { styles };
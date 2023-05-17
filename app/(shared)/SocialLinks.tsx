import React from 'react';

import Image from 'next/image';

import Twitter from 'public/assets/social_twitter.png';
import Discord from 'public/assets/social_discord.png';
import Facebook from 'public/assets/social_facebook.png';
import Google from 'public/assets/social_google.png';
import Instagram from 'public/assets/social_instagram.png';
import Pinterest from 'public/assets/social_pinterest.png';

type SocialLinksProps = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: SocialLinksProps) => {
  return (
    <div className="flex items-center justify-between gap-7">
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          alt="twitter"
          src={Twitter}
          width={20}
          height={20}
        />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          alt="facebook"
          src={Facebook}
          width={20}
          height={20}
        />
      </a>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          alt="google"
          src={Google}
          width={20}
          height={20}
        />
      </a>
      <a href="https://discord.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          alt="discord"
          src={Discord}
          width={20}
          height={20}
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          alt="instagram"
          src={Instagram}
          width={20}
          height={20}
        />
      </a>
      <a href="https://pintrest.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          alt="pintrest"
          src={Pinterest}
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;

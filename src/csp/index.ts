import { createHash, BinaryLike } from 'crypto';

const isProd = process.env.NODE_ENV === 'production';
console.log(isProd);

export const getCSPHeaders = (inlineScriptSource: BinaryLike) => {
  const csp = [];
  const hash = createHash('sha256').update(inlineScriptSource);
  const digest = hash.digest('base64');
  const scriptSource = `'self'${
    isProd ? '' : ` 'unsafe-eval'`
  } 'sha256-${digest}'`;

  csp.push(`base-uri 'self'`);
  csp.push(`form-action 'self'`);
  csp.push(`default-src 'self'`);
  csp.push(
    `script-src https://www.googletagmanager.com/gtag/js?id=GA-T12FY8W6P0 ${scriptSource} 'sha256-TinRgZOAui4+MH5o/E1idHf7gTPA2LJ/3zJQrQJo5+s='`,
  );
  csp.push(`style-src 'self'${isProd ? '' : ` 'unsafe-inline'`}`);
  csp.push(`connect-src 'self' vitals.vercel-insights.com`);
  csp.push(`img-src 'self' data: blob:`);
  csp.push(`font-src 'self' data:`);
  csp.push(`frame-src *`);
  csp.push(`media-src *`);

  return csp.join('; ');
};

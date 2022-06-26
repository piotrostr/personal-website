import { createHash, BinaryLike } from 'crypto';

const isProd = process.env.NODE_ENV === 'production';

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
  csp.push(`script-src ${scriptSource}`);
  csp.push(`style-src 'self'${isProd ? '' : ` 'unsafe-inline'`}`);
  csp.push(`connect-src 'self' vitals.vercel-insights.com`);
  csp.push(`img-src 'self' data: blob:`);
  csp.push(`font-src 'self' data:`);
  csp.push(`frame-src *`);
  csp.push(`media-src *`);

  return csp.join('; ');
};

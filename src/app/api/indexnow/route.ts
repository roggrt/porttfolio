// app/api/indexnow/route.ts
import { NextResponse } from 'next/server';

const INDEXNOW_KEY = 'af69292be1e34c049d286fb91310df0d';
const DOMAIN = 'torisoftt.com'; // Asegúrate de cambiar esto a tu dominio

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { urls } = body;

    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    // Validar que todas las URLs pertenezcan a tu dominio
    const validUrls = urls.every(url => url.startsWith(`https://${DOMAIN}`));
    if (!validUrls) {
      return NextResponse.json(
        { error: 'All URLs must belong to the specified domain' },
        { status: 422 }
      );
    }

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: DOMAIN,
        key: INDEXNOW_KEY,
        keyLocation: `https://${DOMAIN}/${INDEXNOW_KEY}.txt`,
        urlList: urls
      })
    });

    // Manejar las diferentes respuestas de IndexNow
    switch (response.status) {
      case 200:
        return NextResponse.json(
          { message: 'URLs submitted successfully' },
          { status: 200 }
        );
      
      case 400:
        return NextResponse.json(
          { error: 'Bad request - Invalid format' },
          { status: 400 }
        );
      
      case 403:
        return NextResponse.json(
          { error: 'Forbidden - Key validation failed' },
          { status: 403 }
        );
      
      case 422:
        return NextResponse.json(
          { error: 'Unprocessable Entity - URLs don\'t belong to host or invalid key schema' },
          { status: 422 }
        );
      
      case 429:
        return NextResponse.json(
          { error: 'Too Many Requests - Please try again later' },
          { status: 429 }
        );
      
      default:
        return NextResponse.json(
          { error: 'Unexpected error occurred' },
          { status: 500 }
        );
    }
  } catch (error) {
    console.error('IndexNow API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Utilidad para validar URLs
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
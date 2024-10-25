export async function verifyRecaptchaToken(token: string): Promise<boolean> {
    try {
      const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=6LcsaWsqAAAAAPUjPrB-pmhekpv_0j3yqusLXdz1&response=${token}`,
      });
  
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error verifying reCAPTCHA:', error);
      return false;
    }
  }
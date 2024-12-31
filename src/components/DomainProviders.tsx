import React, { useState } from 'react';
import { Search, Globe, CheckCircle, XCircle, Loader2 } from 'lucide-react';

interface DomainResult {
    provider: string;
    available: boolean;
    price: number;
}

interface Provider {
    name: string;
    endpoint: string;
}

const DomainProviders = () => {
    const [domain, setDomain] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [results, setResults] = useState<DomainResult[] | null>(null);

    const providers: Provider[] = [
        { name: 'GoDaddy', endpoint: 'https://api.godaddy.com/v1/domains/available' },
        { name: 'Namecheap', endpoint: 'https://api.namecheap.com/xml.response' },
        { name: 'Google Domains', endpoint: 'https://domains.google.com/registrar/search' },
        { name: 'Name.com', endpoint: 'https://api.name.com/v4/domains' },
        { name: 'NameSilo', endpoint: 'https://www.namesilo.com/api/checkRegisterAvailability' }
    ];

    const checkDomain = async () => {
        if (!domain) return;

        setIsLoading(true);
        setResults(null);

        try {
            // Simulación de resultados
            await new Promise(resolve => setTimeout(resolve, 1500));

            const mockResults: DomainResult[] = providers.map(provider => ({
                provider: provider.name,
                available: Math.random() > 0.5,
                price: Math.floor(Math.random() * 20) + 10
            }));

            setResults(mockResults);
        } catch (error) {
            console.error('Error checking domain:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-8">
                    <Globe className="w-12 h-12 mx-auto mb-4 text-accent-red dark:text-accent-yellow" />
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                        Comprueba disponibilidad de dominios
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Verifica la disponibilidad y precios en diferentes proveedores
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex gap-4 mb-6">
                        <div className="flex-1">
                            <input
                                type="text"
                                value={domain}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDomain(e.target.value)}
                                placeholder="Ingresa el nombre de dominio"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
                  bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2
                  focus:ring-accent-red dark:focus:ring-accent-yellow outline-none"
                            />
                        </div>
                        <button
                            onClick={checkDomain}
                            disabled={isLoading || !domain}
                            className="px-6 py-3 bg-accent-red dark:bg-accent-yellow text-white
                dark:text-gray-900 rounded-lg font-medium hover:opacity-90
                transition-opacity disabled:opacity-50 disabled:cursor-not-allowed
                flex items-center gap-2"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <Search className="w-5 h-5" />
                            )}
                            Buscar
                        </button>
                    </div>

                    {results && (
                        <div className="space-y-4">
                            {results.map((result, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-4 rounded-lg
                    bg-gray-50 dark:bg-gray-800"
                                >
                                    <div className="flex items-center gap-3">
                                        {result.available ? (
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                        ) : (
                                            <XCircle className="w-5 h-5 text-red-500" />
                                        )}
                                        <span className="font-medium text-gray-900 dark:text-white">
                      {result.provider}
                    </span>
                                    </div>
                                    <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {result.available ? (
                          `$${result.price.toFixed(2)}/año`
                      ) : (
                          'No disponible'
                      )}
                    </span>
                                        {result.available && (
                                            <a
                                                href="#"
                                                className="text-sm text-accent-red dark:text-accent-yellow
                          hover:underline"
                                            >
                                                Registrar
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DomainProviders;
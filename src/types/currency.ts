export interface FiatCurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface CryptoCurrency {
  code: string;
  name: string;
  symbol: string;
  network?: string;
}

export type Currency = FiatCurrency | CryptoCurrency;
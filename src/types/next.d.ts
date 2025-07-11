import type { Metadata } from 'next';

declare module 'next' {
  type PageProps<T = {}> = {
    params: T;
    searchParams?: { [key: string]: string | string[] | undefined };
  };

  type GenerateMetadataProps<T = {}> = {
    params: T;
    searchParams?: { [key: string]: string | string[] | undefined };
  };
}
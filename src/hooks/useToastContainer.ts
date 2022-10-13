import React, { useRef } from 'react';

import { ToastContainer } from '@/components/ToastContainer';

export const useToastContainer = () => useRef<React.ElementRef<typeof ToastContainer>>(null);

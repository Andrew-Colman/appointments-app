import React, { ReactNode } from 'react';

type Props = { title: string; description: string; icon: ReactNode };

export default function FeatureCard({ title, description, icon }: Props) {
    return (
        <div className="p-2">
            <div className="flex rounded-lg h-full bg-gray-100 p-4 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        {icon}
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                        {title}
                    </h2>
                </div>
                <div className="flex-grow">
                    <p className="leading-relaxed text-base">{description}</p>
                </div>
            </div>
        </div>
    );
}

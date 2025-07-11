'use client';

import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchparams = useSearchParams();
    const query = searchparams.get("topic") || "";

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchparams.toString(),
                    key: "topic",
                    value: searchQuery,
                });

                router.push(newUrl, { scroll: false });
            } else {
                if (pathname === "/companions") {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchparams.toString(),
                        keysToRemove: ["topic"],
                    });

                    router.push(newUrl, { scroll: false });
                }
            }
        }, 500);
    }, [searchQuery, searchparams, router, pathname]);

    return (
        <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
            <img src="/icons/search.svg" alt="" />
            <input placeholder="Search companions..." className="outline-none" value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
        </div>

    );
}

export default SearchInput;
"use client";

import {useGradient} from "@/hooks/useGradient";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "./ui/select";
import {gradientArray} from "@/constants/gradient";
import {themes} from "@/lib/theme";
import {useTheme} from "@/hooks/useTheme";
import {useLanguage} from "@/hooks/useLanguage";
import {Input} from "./ui/input";
import {useFontSize} from "@/hooks/useFontSize";
import {Label} from "./ui/label";
import {useBackground} from "@/hooks/useBackground";
import exportAsImage from "@/utils/exportAsImage";

import {useCodePreview} from "@/hooks/useCodePreview";
import PopupDialog from "./PopupDialog";
import {useState} from "react";
import {Button} from "./ui/button";

export default function EditorHeader() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [cloudLink] = useState<string>("");
  const [isCopied, setIsCopied] = useState(false);
  const {gradient, setGradient} = useGradient();
  const {setTheme} = useTheme();
  const {setLanguage} = useLanguage();
  const {fontSize, setFontSize} = useFontSize();
  const {isBackgroundHidden, setIsBackgroundHidden} = useBackground();
  const {getPreviewRef} = useCodePreview();

  const handleExportImage = () => {
    const node = getPreviewRef();
    if (node) {
      exportAsImage(node);
    }
  };

  return (
    <section className="fixed top-0 w-full flex justify-center z-10">
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center w-full px-4 sm:px-10 py-4 min-h-20 rounded-b-xl bg-white text-black bg-opacity-10 backdrop-blur-lg border border-black/20 shadow-none">
          <PopupDialog
            setIsCopied={setIsCopied}
            isCopied={isCopied}
            cloudLink={cloudLink}
            isDialogOpen={isDialogOpen}
            setIsDialogOpen={setIsDialogOpen}
          />
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-12 w-full">
            <div className="space-y-1">
              <Label className="text-xs" htmlFor="gradient">
                Gradient
              </Label>
              <Select
                onValueChange={(value: string) => {
                  setGradient(value);
                }}
              >
                <SelectTrigger className="border-black space-x-2 w-16 h-6 flex items-center justify-center">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{background: gradient}}
                  ></div>
                </SelectTrigger>
                <SelectContent className="!w-48">
                  {gradientArray.map(
                    (item: {name: string; gradient: string}, index: number) => (
                      <SelectItem
                        key={index}
                        value={item.gradient}
                        className="flex items-center gap-2 whitespace-nowrap relative"
                      >
                        <div
                          className="min-w-[20px] h-5 rounded-full shrink-0"
                          style={{background: item.gradient}}
                        >
                          <span className="absolute ml-7 text-xs inline-block">
                            {item.name}
                          </span>
                        </div>
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1 flex flex-col">
              <Label className="text-xs w-full" htmlFor="removeBg">
                Background
              </Label>
              <Select
                value={isBackgroundHidden ? "no" : "yes"}
                onValueChange={(value: string) => {
                  setIsBackgroundHidden(value === "no");
                }}
              >
                <SelectTrigger className="w-16 h-6 text-xs border-black">
                  <SelectValue placeholder="Yes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs" htmlFor="theme">
                Card Theme
              </Label>
              <Select
                onValueChange={(value: string) => {
                  setTheme(themes[value]);
                }}
              >
                <SelectTrigger className="w-28 h-6 text-xs text-center border-black">
                  <SelectValue
                    placeholder="ColdarkDark"
                    className="text-center"
                  />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(themes).map((themeName) => (
                    <SelectItem key={themeName} value={themeName}>
                      {themeName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs" htmlFor="language">
                Languages
              </Label>
              <Select
                onValueChange={(value: string) => {
                  setLanguage(value);
                }}
              >
                <SelectTrigger className="w-[100px] h-6 text-xs border-black">
                  <SelectValue placeholder="JavaScript" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="html">HTML</SelectItem>
                  <SelectItem value="css">CSS</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="rust">Rust</SelectItem>
                  <SelectItem value="go">Go</SelectItem>
                  <SelectItem value="bash">C++</SelectItem>
                  <SelectItem value="c++">Bash</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs" htmlFor="fontSize">
                Font Size
              </Label>
              <Input
                type="number"
                value={fontSize}
                onChange={(e) =>
                  setFontSize(parseInt(e.target.value, 10) || 16)
                }
                className="w-16 text-center h-6 font-xs border-black"
              />
            </div>
            <div className="space-y-1 flex flex-col mb-[-5px]">
              <Label className="text-xs">Export image</Label>
              <Button
                onClick={handleExportImage}
                variant="outline"
                className="px-3 py-1 text-xs h-6 bg-transparent border-black"
              >
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

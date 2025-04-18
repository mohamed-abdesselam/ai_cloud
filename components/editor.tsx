"use client"
import UploadForm from "./upload/upload-form"
import ActiveImage from "./active-image"
import { useLayerStore } from "@/lib/layer-store"
import Layers from "./layers"
import ImageTools from "./toolbar/image-tools"
import VideoTools from "./toolbar/video-tools"
import { ModeToggle } from "./toggle"
import GenerativeFill from "./toolbar/generative-fill"
import Loading from "./loading"
import ExportAsset from "./toolbar/export-image"
import Link from "next/link"
import Icons from "./global/icons"

export default function Editor() {
  const activeLayer = useLayerStore((state) => state.activeLayer)

  return (
    <div className="flex h-full ">
      <div className="py-6 px-4  min-w-48 ">
        <div className="flex items-center justify-center gap-4 pb-12">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="w-8 h-8" />
              <span className="text-lg font-medium sr-only">
                Astra
              </span>
            </Link>
          </div>
          <div className="text-center">
            <ModeToggle />
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          {activeLayer.resourceType === "video" ? <VideoTools /> : null}
          {activeLayer.resourceType === "image" ? <ImageTools /> : null}
          {activeLayer.resourceType && (
            <ExportAsset resource={activeLayer.resourceType} />
          )}
        </div>
      </div>
      <Loading />
      <ActiveImage />
      <UploadForm />
      <Layers />
    </div>
  )
}
